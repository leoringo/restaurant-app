export default function MenuList({
  id,
  name,
  deleteMenu,
}: {
  id: string;
  name: string;
  deleteMenu: (id: string) => void;
}) {
  return (
    <tr className="border-b transition-colors">
      <td className="p-4 align-middle font-medium">{id}</td>
      <td className="p-4 align-middle">{name}</td>
      <td className="p-4 align-middle flex justify-end">
        <button onClick={() => deleteMenu(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-300 hover:text-red-500 cursor-pointer"
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
        </button>
      </td>
    </tr>
  );
}
