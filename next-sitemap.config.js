/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://thienphuocbocxep.id.vn", // đổi thành domain thật
  generateRobotsTxt: true, // tạo file robots.txt
  sitemapSize: 7000, // chia sitemap nếu quá lớn
  changefreq: "daily", // tần suất crawl
  priority: 0.7,
  exclude: ["/admin/*"], // loại trừ trang không cần index
  robotsTxtOptions: {
    additionalSitemaps: ["https://thienphuocbocxep.id.vn/sitemap.xml"],
  },
};
