
import dotsIcon from '../../img/dots.png';
import upArrow from '../../img/arrows.png';

const CardList = () => {
  const stats = [
    {
      id: 1,
      title: 'Like',
      follower: '67,138',
      percent: '70%',
      time: '2019',
    },
    {
      id: 2,
      title: 'Stories',
      follower: '386k',
      percent: '60%',
      time: '2019',
    },
    {
      id: 3,
      title: 'Channels',
      follower: '255k',
      percent: '80%',
      time: '2019',
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
      {stats.map((stat) => (
        <div key={stat.id} className="relative border border-[rgb(230,33,23)] shadow-2xl text-[#619AEB] mt-6 flex flex-col rounded-xl border bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <div className='flex justify-between'>
              <div>
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {stat.title}
                </h5>
              </div>
              <div className='w-5'>
                <img src={dotsIcon} alt="" className='w-full'/>
              </div>
            </div>
            <h2 className="block font-sans leading-relaxed text-inherit antialiased text-center text-4xl">
              {stat.follower}
            </h2>
            <div className='arrow-percent flex w-5 items-center mx-[70px]'>
              <div className='flex items-center'>
                <img src={upArrow} alt="" className='w-6'/>
                <div className='font-semibold'>{stat.percent}</div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0 flex m-auto font-thin">
            <p>{stat.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
