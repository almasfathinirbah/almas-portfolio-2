const levels = ["A1", "A2", "B1", "B2", "C1", "C2", "Native"];

const LanguageSkillBar = ({ language, level }) => {
  const currentLevelIndex = levels.indexOf(level);

  return (
    <div className="mb-4">
      <p className="font-semibold text-gray-800">{language}</p>
      <div className="flex gap-1 mt-2">
        {levels.map((lvl, index) => (
          <div
            key={lvl}
            className={`h-6 flex-1 rounded ${
              index <= currentLevelIndex ? "bg-accent" : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>

      {/* Menambahkan Label di bawah bar */}
      <div className="-mt-5 ml-1 mr-1 flex text-sm justify-between text-white z-10">
        <span className="lg:ml-7 lg:mr-5">A1</span>
        <span className="lg:ml-7 lg:mr-6">A2</span>
        <span className="lg:ml-7 lg:mr-5">B1</span>
        <span className="lg:ml-7 lg:mr-5">B2</span>
        <span className="lg:ml-8 lg:mr-5">C1</span>
        <span className="lg:ml-8 lg:mr-5">C2</span>
        <span className="lg:ml-4 lg:mr-3">Native</span>
      </div>
    </div>
  );
};

export default LanguageSkillBar;
