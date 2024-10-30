

type imageProp = {
    src:string
}

const ProfileImage = ({src}:imageProp) => {
  return (
    <div >
      <img src={src} alt="" className="w-8 h-8   object-cover rounded-full border-1 border-gray-50" />
    </div>
  );
};

export default ProfileImage;
