using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Clockwork.API.Controllers
{
    [Route("api/[controller]")]
    public class HealthCheckController : Controller
    {
        // GET api/healthcheck
        [HttpGet]
        public IActionResult Get()
        {
            return StatusCode(418);
        }
    }
}
