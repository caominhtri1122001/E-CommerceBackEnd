﻿using Microsoft.EntityFrameworkCore;

namespace ECommerceBE.Models
{
    public class TodoContext: DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
           : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }

        public DbSet<TodoItem> TodoRole { get;set;}

        public DbSet<ECommerceBE.Models.Roles> Roles { get;set;}
    }
}
