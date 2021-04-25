using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ECommerceBE.Models;

namespace ECommerceBE
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {

        /*1. CORS --> khac do main --> cau hinh: service cho nhung domain nao truy xuat, hoac cho tat *
        * 2. Hoàn thiện vấn đề CRUD 1 Product
        * 3. Tạo thêm Category, hoàn thiện CRUD Category
        * 4. Thêm CRUD product thuộc Category
        * 5. Trả về danh sách Product theo Category
        * 6. Tìm hiểu kết nôi Database
        * * */
        public RolesController()
        {
          
        }

        //GET: api/Roles
        [HttpGet]
        public BaseRespone GetListRoles()
        {
            var res = new BaseRespone(false, null);
            List<Roles> data = FakeCSDL.Instance.listRole;
            if (data.Count != 0)
            {
                res.Success = true;
                res.Data = data;
            }
            return res;
        }

        //GET: api/Roles/{id}
         [HttpGet("{id}")]
        public BaseRespone GetRoles(int roleID)
        {
            var res = new BaseRespone(false, null);
            List<Roles> data = FakeCSDL.Instance.listRole;
            Roles r = new Roles();
            foreach(Roles i in data)
            {
                if (i.roleID == roleID)
                {
                    r = i;
                    res.Success = true;
                    res.Data = r;
                    return res;
                }
            }         
            return res;
        }


        //PUT: api/Roles/{id}
        [HttpPut("{id}")]
        public BaseRespone PutRoles(int roleID,string roleName)
        {
            List<Roles> data = FakeCSDL.Instance.listRole;
            var res = new BaseRespone(false,null);
            foreach (var i in data)
            {
                if (roleID == i.roleID)
                {
                    i.roleID = roleID;
                    i.roleName = roleName;
                    res.Success = true;
                    res.Data = data;
                    return res;
                }
            }
            return res;      
        }

        //POST: api/Roles
        [HttpPost]
        public BaseRespone PostRole(int roleID, string roleName)
        {
            List<Roles> data = FakeCSDL.Instance.listRole;
            Roles newRole = new Roles();
            var res = new BaseRespone(false,null);
            foreach (var i in data)
            {
                if (roleID == i.roleID)
                {
                    return res;
                }
            }
            newRole.roleID = roleID;
            newRole.roleName = roleName;          
            data.Add(newRole);
            res.Success = true;
            res.Data = data;
            return res;
        }

        //DELETE: api/Roles/{id}
        [HttpDelete("{id}")]
        public BaseRespone DeleteRole(int roleID)
        {
            List<Roles> data = FakeCSDL.Instance.listRole;
            var res = new BaseRespone(false,null);
            foreach (var i in data)
            {
                if ( i.roleID == roleID)
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
