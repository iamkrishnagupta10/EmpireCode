export default function Products() {
    return (
      <div className="my-12">
        <h2 className="text-2xl font-bold">Our Products</h2>
        <div className="grid grid-cols-2 gap-8 mt-4">
          <div>
            <h3 className="text-xl font-semibold">Empire Code</h3>
            <p>A new programming language designed for modern development.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Empire OS</h3>
            <p>An open-source operating system built for performance and security.</p>
          </div>
        </div>
      </div>
    );
  }
  