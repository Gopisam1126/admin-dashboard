import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const BrowserStat = () => {
  const browserData = [
    {
      name: "Chrome",
      value: 1483,
      img: "",
      percentage: "3.4%",
      positive: true,
    },
    {
      name: "Mozilla Firefox",
      value: 427,
      img: "",
      percentage: "0.4%",
      positive: true,
    },
    {
      name: "Edge",
      value: 61,
      img: "",
      percentage: "1.2%",
      positive: false,
    },
    {
      name: "Opera",
      value: 246,
      img: "",
      percentage: "1.7%",
      positive: true,
    },
    {
      name: "Safari",
      value: 59,
      img: "",
      percentage: "2.3%",
      positive: false,
    },
  ];

  return (
    <div className="relative top-12">
      <table className="w-full text-left border-collapse">
        <tbody>
          {browserData.map((browser, i) => (
            <tr
              key={i}
              className={`border-t border-gray-700 hover:bg-slate-900 `}
            >
              <td className="py-3 px-2 font-semibold">{browser.name}</td>
              <td className="py-3 px-2">{browser.value}</td>
              <td className="py-3 px-2">
                <span>
                  {browser.positive ? (
                    <ArrowDropUpIcon
                      style={{
                        color: "green",
                      }}
                    />
                  ) : (
                    <ArrowDropDownIcon
                      style={{
                        color: "red",
                      }}
                    />
                  )}
                </span>
                {browser.percentage}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowserStat;
