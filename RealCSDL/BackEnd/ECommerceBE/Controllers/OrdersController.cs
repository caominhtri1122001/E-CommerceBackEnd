using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ECommerceBE.Models;
using System;

namespace ECommerceBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {

        // lấy thông tin product
        private Products LayIFSanPham(int proID)
        {
            QuanLyDuLieu dulieu = new QuanLyDuLieu();
            foreach (Products i in dulieu.LayListSanPham())
            {
                if (i.proID == proID)
                {
                    return i;
                }
            }
            return null;
        }

        private Users LayIFNguoiDung(int uID)
        {
            QuanLyDuLieu dulieu = new QuanLyDuLieu();
            foreach (Users i in dulieu.LayListNguoiDung())
            {
                if (i.userID == uID)
                {
                    return i;
                }
            }
            return null;
        }

        //GET: api/Category
        [HttpGet("GetListOrdersByUID")]
        public BaseRespone getlistor(int userID)
        {
            var res = new BaseRespone(false, null);
            List<OrdersFormUser> data = new List<OrdersFormUser>();
            QuanLyDuLieu dulieu = new QuanLyDuLieu();
            foreach (Orders i in dulieu.LayListDonHang())
            {
                if (i.userID == userID)
                {
                    OrdersFormUser o = new OrdersFormUser();
                    Products p = LayIFSanPham(i.proID);
                    o.orderID = i.orderID;
                    o.proName = p.proName;
                    o.proNum = i.proNum;
                    o.total = p.proPrice * o.proNum;
                    o.orderCTime = i.orderCTime;
                    if (i.orderStatus == 0) o.orderStatus = "Đơn hàng đang chuẩn bị";
                    if (i.orderStatus == 1) o.orderStatus = "Đơn hàng đã đi giao";
                    if (i.orderStatus == -1) o.orderStatus = "Đơn hàng đã bị hủy";
                    if (i.orderStatus != 0)
                        o.oderATime = i.oderATime;
                    else o.oderATime = "";
                    data.Add(o);
                }
            }
            data.Reverse();
            res.Data = data;
            res.Success = true;
            return res;
        }

        [HttpGet("GetListOrders")]
        public BaseRespone GetList()
        {
            var res = new BaseRespone(false, null);
            List<OrdersFormAdmin> data = new List<OrdersFormAdmin>();
            QuanLyDuLieu dulieu = new QuanLyDuLieu();
            foreach (Orders i in dulieu.LayListDonHang())
            {
                if (i.orderStatus == 0)
                {
                    OrdersFormAdmin o = new OrdersFormAdmin();
                    Products p = LayIFSanPham(i.proID);
                    Users u = LayIFNguoiDung(i.userID);
                    o.orderID = i.orderID;
                    o.proName = p.proName;
                    o.proNum = i.proNum;
                    o.userName = u.userName;
                    o.userPhone = u.userPhone;
                    o.userAddress = u.userAddress;
                    data.Add(o);
                }
            }
            res.Data = data;
            res.Success = true;
            return res;
        }

        [HttpPost("DatDon")]
        public BaseRespone DatDon(int pid, int uid, int s)
        {
            var res = new BaseRespone(false, null);
            QuanLyDuLieu dulieu = new QuanLyDuLieu();
            Orders o = new Orders();
            o.proID = pid;
            o.userID = uid;
            o.proNum = s;
            dulieu.DatDon(o);
            res.Success = true;
            return res;
        }


        private Orders LayIFDonHang(int oID)
        {
            QuanLyDuLieu dulieu = new QuanLyDuLieu();
            foreach (Orders i in dulieu.LayListDonHang())
            {
                if (i.orderID == oID)
                {
                    return i;
                }
            }
            return null;
        }

        [HttpDelete("HuyDonHang")]
        public BaseRespone CO(int orID)
        {
            var res = new BaseRespone(false, null);
            QuanLyDuLieu dulieu = new QuanLyDuLieu();
            Orders o = LayIFDonHang(orID);
            if (o.orderStatus == 0)
            {
                dulieu.HuyDonHang(orID);
                res.Success = true;
            }
            return res;
        }

        [HttpPut("AcceptOrder")]
        public BaseRespone AO(int orID)
        {
            var res = new BaseRespone(false, null);
            QuanLyDuLieu dulieu = new QuanLyDuLieu();
            Orders o = LayIFDonHang(orID);
            if (o.orderStatus == 0)
            {
                dulieu.XacNhanDon(orID);
                res.Success = true;
            }
            return res;
        }
    }
}
