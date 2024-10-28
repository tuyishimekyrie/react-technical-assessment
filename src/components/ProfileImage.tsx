

type imageProp = {
    src:string
}

const ProfileImage = ({src}:imageProp) => {
  return (
    <div className="">
      <img src={src} alt="" className="w-8 h-8 absolute  object-cover rounded-full border-1 border-gray-50" />
    </div>
  );
};

export default ProfileImage;
