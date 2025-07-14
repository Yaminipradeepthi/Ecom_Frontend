using Server.Models;
using System.Collections.Generic;
namespace Server.DTOs
{
public class OrderDto
{
    public int UserId { get; set; }
    public List<OrderItem> Items { get; set; } = new();
    public decimal Total { get; set; }
}
}
