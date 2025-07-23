interface ProfilePictureInterface {
  className: string;
}

export default function ProfilePicture({ className }: ProfilePictureInterface) {
  return <div className={className}></div>;
}
