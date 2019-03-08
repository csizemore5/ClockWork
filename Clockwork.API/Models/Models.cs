using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Clockwork.API.Models
{
    public class ClockworkContext : DbContext
    {
        public DbSet<CurrentTimeQuery> CurrentTimeQueries { get; set; }
        public DbSet<WorldTimeQuery> WorldTimeQueries { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=clockwork.db");
        }        
    }

    public class TimeQuery
    {
        public string ClientIp { get; set; }
        public DateTime UTCTime { get; set; }
    }

    public class CurrentTimeQuery : TimeQuery
    {
        public int CurrentTimeQueryId { get; set; }
        public DateTime Time { get; set; }
    }

    public class WorldTimeQuery : TimeQuery
    {
        public int WorldTimeQueryId { get; set; }
        public string RequestedTimeZone { get; set; }
        public string ConvertedDateTime { get; set; }
    }

    public static class TimeZoneIds
    {
        public static List<TimeZoneInfo> GetAllTimeZoneInfo()
        {
            List<TimeZoneInfo> allTimeZoneInfo = new List<TimeZoneInfo>();
            foreach (TimeZoneInfo tz in TimeZoneInfo.GetSystemTimeZones())
            {
                allTimeZoneInfo.Add(tz);
            }
            return allTimeZoneInfo;
        }
    }

}
