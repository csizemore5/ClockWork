using Clockwork.API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Clockwork.API.Controllers
{
    [Route("api/[controller]")]
    public class TimeZoneIdsController : Controller
    {
        // GET api/worldtime/TimeZoneIds
        [HttpGet("{id}")]
        public IActionResult Get()
        {
            List<string> result = new List<string>();
            var timeZoneIds = TimeZoneIds.GetAllTimeZoneInfo();
            foreach(TimeZoneInfo tzi in timeZoneIds)
            {
                result.Add(tzi.Id);
            }
            return Ok(result);
        }
    }
}
