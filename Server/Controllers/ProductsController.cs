using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;



namespace Server.Controllers {
  [ApiController]
  [Route("api/products")]
  public class ProductsController: ControllerBase {
    private readonly AppDbContext _db;
    public ProductsController(AppDbContext db) => _db = db;
    [HttpGet]
    public async Task<IActionResult> Get() => Ok(await _db.Products.ToListAsync());
  }
}
