using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ECommerceBE.Models;

namespace ECommerceBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private bool checkInfoAcc(string taikhoan, string matkhau)
        {
            foreach (Users i in FakeCSDL.Instance.listUser)
            {
                if (i.userAccName == taikhoan) return false;
            }
            for (int i = 0; i < taikhoan.Length; i++)
            {
                if ((taikhoan[i] < 48 || taikhoan[i] > 57) && (taikhoan[i] < 65 || taikhoan[i] > 90)
                    && (taikhoan[i] < 97 || taikhoan[i] > 122)) return false;
            }
            for (int i = 0; i < matkhau.Length; i++)
            {
                if ((matkhau[i] < 48 || matkhau[i] > 57) && (matkhau[i] < 65 || matkhau[i] > 90)
                    && (matkhau[i] < 97 || matkhau[i] > 122)) return false;
            }
            return true;
        }

        [HttpGet("DangKy")]
        public BaseRespone Regis(string taikhoan, string matkhau, string hvt, string sdt, string dc)
        {
            var res = new BaseRespone(false, false);
            if (checkInfoAcc(taikhoan, matkhau))
            {
                res.Success = true;
                Users temp = new Users();
                temp.userID = FakeCSDL.Instance.listUser.Count + 1;
                temp.urlAvatar = "https://lazi.vn/uploads/users/avatar/1586010042_0ac3294600fdbbace1702b5b9c7ce1dc.jpg";
                temp.userName = hvt;
                temp.userAccName = taikhoan;
                temp.userPass = matkhau;
                temp.userAddress = dc;
                temp.userPhone = sdt;
                temp.isAdmin = false;
                FakeCSDL.Instance.listUser.Add(temp);
            }
            return res;
        }


        //GET: api/Users
        [HttpGet]
        public BaseRespone GetListUser()
        {
            var res = new BaseRespone(false, null);
            List<Users> data = FakeCSDL.Instance.listUser;
            if (data.Count != 0)
            {
                res.Success = true;
                res.Data = data;
            }
            return res;
            //return FakeCSDL.Instance.listUser;
        }

        //GET: api/Users/{id}
        [HttpGet("{userID}")]
        public BaseRespone GetUser(int userID)
        {
            var res = new BaseRespone(false, null);
            List<Users> data = FakeCSDL.Instance.listUser;
            Users u = new Users();
            foreach (Users i in data)
            {
                if (i.userID == userID)
                {
                    u = i;
                    res.Success = true;
                    res.Data = u;
                    return res;
                }
            }
            return res;
        }


        //PUT: api/Users/{id}
        [HttpPut("{userID}")]
        public BaseRespone PutUser(int userID, string uName , string uAName, string uPass, string uPhone,string uAddress)
        {
            List<Users> data = FakeCSDL.Instance.listUser;
            var res = new BaseRespone(false, null);
            foreach (Users i in data)
            {
                if (userID == i.userID)
                {
                    i.userID = userID;
                    i.userName = uName;
                    i.userAccName = uAName;
                    i.userPass = uPass;
                    i.userPhone = uPhone;
                    i.userAddress = uAddress;
                    res.Success = true;
                    res.Data = data;
                    return res;
                }
            }
            return res;
        }

        //POST: api/Users
        [HttpPost]
        public BaseRespone PostRole(int userID, string uName, string uAName, string uPass, string uPhone, string uAddress)
        {
            List<Users> data = FakeCSDL.Instance.listUser;
            Users newUser = new Users();
            var res = new BaseRespone(false, null);
            foreach (Users i in data)
            {
                if (userID == i.userID)
                {
                    return res;
                }
            }
            newUser.userID = userID;
            newUser.userName = uName;
            newUser.userAccName = uAName;
            newUser.userPass = uPass;
            newUser.userPhone = uPhone;
            newUser.userAddress = uAddress;
            data.Add(newUser);
            res.Success = true;
            res.Data = data;
            return res;
        }

        //DELETE: api/Users/{id}
        [HttpDelete("{userID}")]
        public BaseRespone DeleteRole(int userID)
        {
            List<Users> data = FakeCSDL.Instance.listUser;
            var res = new BaseRespone(false, null);
            foreach (Users i in data)
            {
                if (i.userID == userID)
                {
                    data.Remove(i);
                    res.Success = true;
                    res.Data = data;
                    return res;
                }
            }
            return res;
        }
    }
}
