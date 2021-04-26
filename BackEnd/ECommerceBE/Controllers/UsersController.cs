using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ECommerceBE.Models;

namespace ECommerceBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
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
        public BaseRespone PutUser(int userID, string uName , string uAName, string uPass, string uPhone,string uAddress,int uRoleID)
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
                    i.userRoleID = uRoleID;
                    res.Success = true;
                    res.Data = data;
                    return res;
                }
            }
            return res;
        }

        //POST: api/Users
        [HttpPost]
        public BaseRespone PostRole(int userID, string uName, string uAName, string uPass, string uPhone, string uAddress, int uRoleID)
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
            newUser.userRoleID = uRoleID;
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
