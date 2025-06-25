const Panel = ({
  title,
  children,
  className = "",
  headerClassName = "",
  bodyClassName = "",
}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden ${className}`}
    >
      {title && (
        <div
          className={`px-4 py-3 border-b border-gray-200 dark:border-gray-700 font-medium ${headerClassName}`}
        >
          {title}
        </div>
      )}
      <div className={`p-4 ${bodyClassName}`}>{children}</div>
    </div>
  );
};

export default Panel;
