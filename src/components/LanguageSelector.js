import React from "react";

export default class LanguageSelector extends React.Component {
  state = {
    currentLng: "en",
  };

  onLanguageChange(lng) {
    console.log("Language changed", lng);
    this.setState({
      currentLng: lng,
    });
  }

  render() {
    const languages = [
      {
        name: "Russian",
        locale: "ru",
      },
      {
        name: "Ukrainian",
        locale: "uk",
      },
      {
        name: "English",
        locale: "en",
      },
    ];
    return (
      <div className="language-list">
        <p>Current Language : {this.state.currentLng}</p>
        {languages.map((language) => (
          <button
            className="language-item bg-green-500 p-1"
            key={language.name}
            onClick={() => this.onLanguageChange(language.locale)}
          >
            {language.name}
          </button>
        ))}
      </div>
    );
  }
}
