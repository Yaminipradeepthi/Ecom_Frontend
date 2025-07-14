using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;
using Server.DTOs;
using Server.Data;
using BCrypt.Net;


namespace Server.Controllers {
  [ApiController]
  [Route("api/auth")]
  public class AuthController: ControllerBase {
    private readonly AppDbContext _db;
    public AuthController(AppDbContext db) => _db = db;

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDto dto) {
      var user = new User { Name = dto.Name, Email = dto.Email, PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password) };
      _db.Users.Add(user); await _db.SaveChangesAsync();
      return Ok(new { message = "Registered" });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto) {
      var u = await _db.Users.FirstOrDefaultAsync(x => x.Email == dto.Email);
      if (u == null || !BCrypt.Net.BCrypt.Verify(dto.Password, u.PasswordHash)) return Unauthorized();
      return Ok(new { token = "fake-jwt" });
    }
  }
}
