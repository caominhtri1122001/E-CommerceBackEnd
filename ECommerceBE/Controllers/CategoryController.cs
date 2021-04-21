using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ECommerceBE.Models;

namespace ECommerceBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public CategoryController()
        {

        }

        //GET: api/Category
        [HttpGet]
        public List<Category> GetListCate()
        {
            return FakeCSDL.Instance.listCat;
        }

        //GET: api/Category/{id}
        [HttpGet("{id}")]
        public BaseRespone GetCate(int catID)
        {
            var res = new BaseRespone(false, null);
            List<Category> data = FakeCSDL.Instance.listCat;
            Category cat = new Category();
            foreach (Category i in data)
            {
                if (i.catID == catID)
                {
                    cat = i;
                    res.Success = true;
                    res.Data = cat;
                    return res;
                }
            }
            return res;
        }

        //PUT: api/Category/{id}
        [HttpPut("{id}")]
        public BaseRespone PutCate(int catID, string catName)
        {
            List<Category> data = FakeCSDL.Instance.listCat;
            var res = new BaseRespone(false, null);
            foreach (var i in data)
            {
                if (catID == i.catID)
                {
                    i.catID = catID;
                    i.catName = catName;
                    res.Success = true;
                    res.Data = data;
                    return res;
                }
            }
            return res;
        }

        //POST: api/Category
        [HttpPost]
        public BaseRespone PostCate(int catID, string catName)
        {
            List<Category> data = FakeCSDL.Instance.listCat;
            Category newCat = new Category();
            var res = new BaseRespone(false, null);
            foreach (var i in data)
            {
                if (catID == i.catID)
                {
                    return res;
                }
            }
            newCat.catID = catID;
            newCat.catName = catName;
            data.Add(newCat);
            res.Success = true;
            res.Data = data;
            return res;
        }

        //DELETE: api/Category/{id}
        [HttpDelete("{id}")]
        public BaseRespone DeleteCate(int catID)
        {
            List<Category> data = FakeCSDL.Instance.listCat;
            var res = new BaseRespone(false, null);
            foreach (var i in data)
            {
                if (i.catID == catID)
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
