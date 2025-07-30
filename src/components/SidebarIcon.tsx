interface SidebarIconInterface {
    children?: React.ReactNode
}

export default function SidebarIcon({ children }: SidebarIconInterface ) {
  return (
    <div className="text-3xl hover:bg-white hover:text-purple-500 p-4 rounded-full transition-all">
      {children}
    </div>
  );
}