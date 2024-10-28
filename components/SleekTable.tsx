type DataRow = { [key: string]: string | number };

interface SleekTableProps {
  data: DataRow[];
}

const SleekTable = ({ data }: SleekTableProps) => (
  <div className="overflow-x-auto p-4">
    <table
      className="min-w-full border-collapse border border-gray-300"
      style={{
        background: "rgba(255, 255, 255, 0.15)", // Semi-transparent white
        backdropFilter: "blur(10px)", // Glass-like blur effect
        WebkitBackdropFilter: "blur(10px)", // Safari support
        borderRadius: "8px", // Smooth corners
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        overflow: "hidden",
      }}
    >
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th
              key={key}
              className="border border-gray-300 px-4 py-2 text-center font-medium text-white"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }} // Darker semi-transparent header
            >
              {key.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((value, colIndex) => (
              <td
                key={colIndex}
                className="border border-gray-300 px-4 py-2 text-center text-white hover:bg-white/20 transition-all duration-200 ease-in-out"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Light glass look
                }}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SleekTable;
