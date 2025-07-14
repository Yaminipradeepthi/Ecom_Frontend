using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data {
  public class AppDbContext: DbContext {
    public AppDbContext(DbContextOptions<AppDbContext> opts): base(opts) {}
    public DbSet<User> Users => Set<User>();
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Order> Orders => Set<Order>();
  }
}
