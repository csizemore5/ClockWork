﻿// <auto-generated />
using Clockwork.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Clockwork.API.Migrations
{
    [DbContext(typeof(ClockworkContext))]
    [Migration("20190308152749_TimeQuery")]
    partial class TimeQuery
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125");

            modelBuilder.Entity("Clockwork.API.Models.CurrentTimeQuery", b =>
                {
                    b.Property<int>("CurrentTimeQueryId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClientIp");

                    b.Property<DateTime>("Time");

                    b.Property<DateTime>("UTCTime");

                    b.HasKey("CurrentTimeQueryId");

                    b.ToTable("CurrentTimeQueries");
                });

            modelBuilder.Entity("Clockwork.API.Models.WorldTimeQuery", b =>
                {
                    b.Property<int>("WorldTimeQueryId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClientIp");

                    b.Property<string>("ConvertedDateTime");

                    b.Property<string>("RequestedTimeZone");

                    b.Property<DateTime>("UTCTime");

                    b.HasKey("WorldTimeQueryId");

                    b.ToTable("WorldTimeQueries");
                });
#pragma warning restore 612, 618
        }
    }
}
