using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ECommerceBE.Models;

namespace ECommerceBE
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        private readonly TodoContext _context;

        private static List<Roles> listRole = new List<Roles>();
        private int currentID = 3;

        public RolesController(TodoContext context)
        {
            _context = context;
            if (listRole.Count == 0)
            {
                var role = new Roles();
                role.roleID = 1;
                role.roleName = "Administator";
                listRole.Add(role);
                role = new Roles();
                role.roleID = 2;
                role.roleName = "Customer";
                listRole.Add(role);
            }
        }

        //GET: api/Roles
        [HttpGet]
        public List<Roles> GetRoles()
        {
            return listRole;
        }

        //GET: api/Roles/{id}\

    }
}
