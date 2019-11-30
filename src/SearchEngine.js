import React from "React";

export default function SearchEngine() {
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Type a city..."
          autocomplete="off"
          class="search-bar"
          id="search-input"
        />{" "}
        <input
          type="submit"
          placeholder="search"
          class="btn btn-outline-primary"
        />
      </form>
    </div>
  );
}
