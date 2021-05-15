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
        private Products getInfoP (int id)
        {
            Products p = new Products();
            foreach ( Products i in FakeCSDL.Instance.listPro )
            {
                if (i.proID == id) p = i;
            }
            return p;
        }

        //GET: api/Category
        [HttpGet("GetListOrdersByUID")]
        public BaseRespone GetListCate(int userID)
        {
            var res = new BaseRespone(false, null);
            List<OrdersFormUser> data = new List<OrdersFormUser>();
            foreach(Orders i in FakeCSDL.Instance.listOrd)
            {
                if ( i.userID == userID )
                {
                    OrdersFormUser o = new OrdersFormUser();
                    Products p = getInfoP(i.proID);
                    o.orderID = i.orderID;
                    o.proName = p.proName;
                    o.proNum = i.proNum;
                    o.total = p.proPrice * o.proNum;
                    o.orderCTime = i.orderCTime.ToString("HH:mm:ss dd/MM/yyyy");
                    if (i.orderStatus == 0) o.orderStatus = "Đơn hàng đang chuẩn bị";
                    if (i.orderStatus == 1) o.orderStatus = "Đơn hàng đã đi giao";
                    if (i.orderStatus == -1) o.orderStatus = "Đơn hàng đã bị hủy";
                    if (i.orderStatus != 0)
                        o.oderATime = i.oderATime.ToString("HH:mm:ss dd/MM/yyyy");
                    else o.oderATime = "";
                    data.Add(o);
                }
            }
            res.Data = data;
            res.Success = true;
            return res;
        }

        [HttpPut("CancelOrder")]
        public BaseRespone CO(int orID)
        {
            var res = new BaseRespone(false, null);
            List<OrdersFormUser> data = new List<OrdersFormUser>();
            foreach (Orders i in FakeCSDL.Instance.listOrd)
            {
                if (i.orderID == orID)
                {
                    if (i.orderStatus == 0)
                    {
                        i.orderStatus = -1;
                        i.oderATime = DateTime.Now;
                        res.Success = true;
                    }
                }
            }
            return res;
        }

        [HttpPut("AcceptOrder")]
        public BaseRespone AO(int orID)
        {
            var res = new BaseRespone(false, null);
            List<OrdersFormUser> data = new List<OrdersFormUser>();
            foreach (Orders i in FakeCSDL.Instance.listOrd)
            {
                if (i.orderID == orID)
                {
                    if (i.orderStatus == 0)
                    {
                        i.orderStatus = 1;
                        i.oderATime = DateTime.Now;
                        res.Success = true;
                    }
                }
            }
            return res;
        }
    }
}
