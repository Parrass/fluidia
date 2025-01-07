const blogPosts = [
  {
    title: "The Future of AI in Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    date: "Mar 16, 2024",
    readTime: "5 min read"
  },
  {
    title: "Machine Learning: A Business Perspective",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    date: "Mar 15, 2024",
    readTime: "3 min read"
  },
  {
    title: "Transforming Industries with AI",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
    date: "Mar 14, 2024",
    readTime: "4 min read"
  }
];

const Blog = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          AI Insights & Updates
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-semibold group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;