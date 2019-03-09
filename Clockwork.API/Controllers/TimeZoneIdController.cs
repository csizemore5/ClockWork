using Clockwork.API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;

namespace Clockwork.API.Controllers
{
    [Route("api/[controller]")]
    public class TimeZoneIdsController : Controller
    {
        // GET api/timezoneids
        [HttpGet]
        public IActionResult Get()
        {
            List<string> result = new List<string>();
            var timeZoneIds = TimeZoneIds.GetAllTimeZoneInfo();
            foreach(TimeZoneInfo tzi in timeZoneIds)
            {
                result.Add(tzi.Id);
            }
            Console.WriteLine("TimeZone Ids fetched" + DateTime.UtcNow);
            return Ok(result);
        }
    }
}
