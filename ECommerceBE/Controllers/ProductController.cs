using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ECommerceBE.Models;

namespace ECommerceBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public ProductController()
        {

        }
        //GET: api/Products
        [HttpGet]
        public List<Products> GetListProduct()
        {
            return FakeCSDL.Instance.listPro;
        }

        //GET: api/Products/{id}
        [HttpGet("{id}")]
        public BaseRespone GetProduct(int proID)
        {
            var res = new BaseRespone(false, null);
            List<Products> data = FakeCSDL.Instance.listPro;
            Products pro = new Products();
            foreach (Products i in data)
            {
                if (i.proID == proID)
                {
                    pro = i;
                    res.Success = true;
                    res.Data = pro;
                    return res;
                }
            }
            return res;
        }

        //PUT: api/Products/{id}
        [HttpPut("{id}")]
        public BaseRespone PutProduct(int proID, string proName,
            string proBrand, string proOrigin, double proPrice,
            string proDescription, int status, int catID)
        {
            List<Products> data = FakeCSDL.Instance.listPro;
            var res = new BaseRespone(false, null);
            foreach (var i in data)
            {
                if (catID == i.catID && i.proID == proID)
                {
                    i.proName = proName;
                    i.proBrand = proBrand;
                    i.proOrigin = proOrigin;
                    i.proPrice = proPrice;
                    i.proDescription = proDescription;
                    i.status = status;
                    res.Success = true;
                    res.Data = data;
                    return res;
                }
            }
            return res;
        }

        //POST: api/Category
        [HttpPost]
        public BaseRespone PostProduct(int proID, string proName,
            string proBrand, string proOrigin, double proPrice,
            string proDescription, int status, int catID)
        {
            List<Products> data = FakeCSDL.Instance.listPro;
            Products newPro = new Products();
            var res = new BaseRespone(false, null);
            foreach (var i in data)
            {
                if (i.catID == catID && i.proID == proID)
                {
                    return res;
                }
            }
            newPro.proName = proName;
            newPro.proBrand = proBrand;
            newPro.proOrigin = proOrigin;
            newPro.proPrice = proPrice;
            newPro.proDescription = proDescription;
            newPro.status = status;
            newPro.proID = proID;
            newPro.catID = catID;
            data.Add(newPro);
            res.Success = true;
            res.Data = data;
            return res;
        }
    }   
}
