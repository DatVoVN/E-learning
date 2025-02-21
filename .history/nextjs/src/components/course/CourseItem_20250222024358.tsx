import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseItem = () => {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded-lg">
      <Link href="#" className="block h-[200px]">
        <Image
          alt=""
          src="https://plus.unsplash.com/premium_photo-1740080515911-c2478cd296ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
          width={300}
          height={300}
        />
      </Link>
    </div>
  );
};

export default CourseItem;
