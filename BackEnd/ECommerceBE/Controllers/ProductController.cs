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
        public BaseRespone GetListProduct()
        {
            var res = new BaseRespone(false, null);
            List<Products> data = FakeCSDL.Instance.listPro;
            data.Reverse();
            if (data[0].proID == 1) data.Reverse();
            if (data.Count != 0)
            {
                res.Success = true;
                res.Data = data;
            }
            return res;
            //return FakeCSDL.Instance.listPro;
        }

        //GET: api/Products/{id}
        [HttpGet("GetProductByID")]
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

        private List<Products> getListProByCatID (int IDCat)
        {
            List<Products> data = new List<Products>();
            if (IDCat == 0) data = FakeCSDL.Instance.listPro;
            else
            {
                foreach (Products i in FakeCSDL.Instance.listPro)
                {
                    if (i.catID == IDCat)
                    {
                        data.Add(i);
                    }
                }
            }
            return data;
        }

        [HttpGet("GetListProductByIDCat")]
        public BaseRespone GetProductCat(int catID)
        {
            var res = new BaseRespone(false, null);
            List<Products> data = getListProByCatID(catID);
            data.Reverse();
            res.Data = data;
            res.Success = true;
            return res;
        }

        // xếp theo giá giảm dần
        [HttpGet("GetSort1ListProductByIDCat")]
        public BaseRespone Get1ProductCat(int catID)
        {
            var res = new BaseRespone(false, null);
            List<Products> data = getListProByCatID(catID);
            for(int i = 0; i < data.Count - 1; i++)
            {
                for (int j = i + 1; j < data.Count; j++)
                {
                    if(data[i].proPrice > data[j].proPrice)
                    {
                        Products temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
            }
            res.Data = data;
            res.Success = true;
            return res;
        }

        // xếp theo giá tăng dần
        [HttpGet("GetSort2ListProductByIDCat")]
        public BaseRespone Get2ProductCat(int catID)
        {
            var res = new BaseRespone(false, null);
            List<Products> data = getListProByCatID(catID);
            for (int i = 0; i < data.Count - 1; i++)
            {
                for (int j = i + 1; j < data.Count; j++)
                {
                    if (data[i].proPrice < data[j].proPrice)
                    {
                        Products temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
            }
            res.Data = data;
            res.Success = true;
            return res;
        }

        // xếp theo ưu chuộng
        [HttpGet("GetSort3ListProductByIDCat")]
        public BaseRespone Get3ProductCat(int catID)
        {
            var res = new BaseRespone(false, null);
            List<Products> data = getListProByCatID(catID);
            for (int i = 0; i < data.Count - 1; i++)
            {
                for (int j = i + 1; j < data.Count; j++)
                {
                    if (data[i].NumberOfSold < data[j].NumberOfSold)
                    {
                        Products temp = data[i];
                        data[i] = data[j];
                        data[j] = temp;
                    }
                }
            }
            res.Data = data;
            res.Success = true;
            return res;
        }

        //GET: api/Products/{catID}
        //[HttpGet("product-detail")]
        //public BaseRespone GetProductByCat(int catID, int proID)
        //{
        //    var res = new BaseRespone(false, null);
        //    List<Products> data = new List<Products>();
        //    foreach (Products i in FakeCSDL.Instance.listPro)
        //    {
        //        if (catID == 0)
        //        {                   
        //            if (i.proID == proID)
        //            {
        //                data.Add(i);
        //            }
        //        }
        //        else if (i.catID == catID && i.proID == proID)
        //        {
        //        }
        //        else if (proID == 0)
        //        {
        //            if (i.catID == catID)
        //            {
        //                data.Add(i);
        //            }
        //        }

        //    }
        //    if (data.Count != 0)
        //    {
        //        res.Success = true;
        //        res.Data = data;
        //    }
        //    return res;
        //}

        //PUT: api/Products/{id}
        [HttpPut("{proID}")]
        public BaseRespone PutProduct(int proID, string proName,
            string proBrand, string proOrigin,double proOldPrice, double proPrice,
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
                    i.proOldPrice = proOldPrice;
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

        //POST: api/Products
        [HttpPost]
        public BaseRespone PostProduct(int proID, string proName,
            string proBrand, string proOrigin, double proOldPrice, double proPrice,
            string proDescription, int status, int catID)
        {
            List<Products> data = FakeCSDL.Instance.listPro;
            List<Category> catData = FakeCSDL.Instance.listCat;
            Products newPro = new Products();
            var res = new BaseRespone(false, null);
            foreach (var i in data)
            {
                if (i.catID == catID && i.proID == proID)
                {
                    return res;
                }
            }
            foreach (var i in catData)
            {
                if (catID == i.catID)
                {
                    newPro.proName = proName;
                    newPro.proBrand = proBrand;
                    newPro.proOrigin = proOrigin;
                    newPro.proOldPrice = proOldPrice;
                    newPro.proPrice = proPrice;
                    newPro.proDescription = proDescription;
                    newPro.status = status;
                    newPro.proID = proID;
                    newPro.catID = catID;
                    data.Add(newPro);
                    res.Success = true;
                    res.Data = data;
                }
            }          
            return res;
        }

        //DELETE: api/Products/{id}
        //[HttpDelete("{catID}")]
        [HttpDelete("product-detail-delete")]
        public BaseRespone DeleteProduct(int catID,int proID)
        {
            List<Products> data = FakeCSDL.Instance.listPro;
            var res = new BaseRespone(false, null);
            foreach (Products i in data)
            {
                if (i.catID == catID && i.proID == proID)
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
