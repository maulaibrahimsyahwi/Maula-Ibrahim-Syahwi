export const getButtonConfig = (status, link) => {
  switch (status) {
    case "active":
      return {
        href: link,
        text: "View",
        className:
          "bg-violet-700 hover:bg-violet-600 cursor-pointer transition-colors duration-200",
        clickable: true,
        target: "_blank",
      };
    case "expired":
      return {
        text: "Link Expired",
        className: "bg-red-600 cursor-not-allowed opacity-70",
        clickable: false,
        tooltip: "Link sudah tidak dapat diakses",
      };
    case "maintenance":
      return {
        text: "Under Maintenance",
        className: "bg-yellow-600 cursor-not-allowed opacity-70",
        clickable: false,
        tooltip: "Currently in maintenance",
      };
    case "inactive":
      return {
        text: "Not Available",
        className: "bg-red-600 cursor-not-allowed opacity-60",
        clickable: false,
        tooltip: "Project is not active",
      };
    case "coming_soon":
      return {
        text: "Coming Soon",
        className: "bg-gray-500 cursor-not-allowed opacity-50",
        clickable: false,
        tooltip: "Project is under development",
      };
    default:
      return {
        text: "Coming Soon",
        className: "bg-gray-500 cursor-not-allowed opacity-50",
        clickable: false,
        tooltip: "Unknown status",
      };
  }
};
