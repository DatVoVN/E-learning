import React from 'react';

const page = ({ params, searchParams }: { params: any; searchParams: any }) => {
  console.log(`Params`, params);
  console.log(`SearchParam`, searchParams);
  return <div>Lesson</div>;
};

export default page;
