using Clockwork.API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Clockwork.API.Controllers
{
    [Route("api/[controller]")]
    public class WorldTimeController : Controller
    {
        // GET api/worldtime/selectedZone
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var utcTime = DateTime.UtcNow;
            var serverTime = DateTime.Now;
            var ip = HttpContext.Connection.RemoteIpAddress.ToString();
            var timeZones = TimeZoneIds.GetAllTimeZoneInfo();

            if(id > timeZones.Count - 1)
            {
                return StatusCode(404);
            }

            var requestedTimeZone = timeZones[id].Id.ToString();
            var convertedDateTime = TimeZoneInfo.ConvertTimeFromUtc(utcTime, timeZones[id]).ToShortTimeString();

            var returnVal = new WorldTimeQuery
            {
                ClientIp = ip,
                UTCTime = utcTime,
                RequestedTimeZone = requestedTimeZone,
                ConvertedDateTime = convertedDateTime                
            };

            using (var db = new ClockworkContext())
            {
                db.WorldTimeQueries.Add(returnVal);
                var count = db.SaveChanges();
                Console.WriteLine("{0} records saved to database", count);

                Console.WriteLine();
                foreach (var WorldTimeQuery in db.WorldTimeQueries)
                {
                    Console.WriteLine($" - {WorldTimeQuery.RequestedTimeZone} : {WorldTimeQuery.ConvertedDateTime}");
                }
            }

            return Ok(returnVal);
        }
    }
}
