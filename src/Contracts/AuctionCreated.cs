using System;

namespace Contracts;

public class AuctionCreated
{
    public Guid Id { get; set; }
    public int ReservePrice { get; set; } = 0;
    public string Seller { get; set; } = string.Empty;
    public string Winner { get; set; } = string.Empty;
    public int? SoldAmount { get; set; }
    public int? CurrentHighBid { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdateAt { get; set; } = DateTime.UtcNow;
    public DateTime AuctionEnd { get; set; }
    public string Status { get; set; }
    public string Make { get; set; } = string.Empty;
    public string Model { get; set; } = string.Empty;
    public int Year { get; set; }
    public string? Color { get; set; }
    public int Mileage { get; set; }
    public string? ImageUrl { get; set; }
}
