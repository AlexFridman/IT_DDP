using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AjaxDemo.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<object> Get()
        {
            return new List<object>
            {
                new {Name = "alex", Age = 19},
                new {Name = "petia", Age = 49},
                new {Name = "vasia", Age = 39},
                new {Name = "vova", Age = 29}
            };
        }
    }
}
