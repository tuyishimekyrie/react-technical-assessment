
import Skeleton from 'react-loading-skeleton';

const SkeletonTodo = () => {
  return (
    <div>
      {' '}
      <div className="flex flex-col gap-4 w-64 h-60 justify-between p-4 rounded-2xl bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <p className='w-12 h-4 '>
            <Skeleton  />
          </p>
          <Skeleton />
        </div>
        <div>
          <p className="dark:text-white">
            <Skeleton className='w-10 h-10'/>
          </p>
          <Skeleton className='w-10 h-10' />
        </div>
        <div className="flex items-center justify-between border-t-2 border-slate-50 py-4">
          <div className="flex -space-x-2">
            <Skeleton className='w-10 h-10'/>
          </div>
          <div className="flex items-center gap-2 text-slate-400 justify-between">
            <Skeleton className='w-10 h-10'/>
            <p className="text-xl">
              <Skeleton className='w-10 h-10'/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonTodo;
