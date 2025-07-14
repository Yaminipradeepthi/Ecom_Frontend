using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.DTOs;
using Server.Models;
using BCrypt.Net;


namespace Server.Controllers {
  [ApiController]
  [Route("api/orders")]
  public class OrdersController: ControllerBase {
    private readonly AppDbContext _db;
    public OrdersController(AppDbContext db) => _db = db;
    [HttpPost]
    public async Task<IActionResult> Post(OrderDto dto) {
      var order = new Order { UserId = dto.UserId, Items = dto.Items, Total = dto.Total };
      _db.Orders.Add(order); await _db.SaveChangesAsync();
      return Ok(order);
    }
  }
}
