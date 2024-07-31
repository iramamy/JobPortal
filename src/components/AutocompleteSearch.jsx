import { ReactSearchAutocomplete } from "react-search-autocomplete";

const AutocompleteSearch = ({items, onSelect, onClear}) => {
    const handleSelect = (results) => {
        onSelect(results)
      }
      const handleOnClear = () => {
        onClear();
    };

    return (
        <div>
            <div style={{ maxWidth: 400, margin: 'auto'}}>
                <ReactSearchAutocomplete
                    items={items}
                    autoFocus
                    onSelect={handleSelect}
                    onClear={handleOnClear}
                    placeholder='Search here...'
                    // formatResult={formatResult}
                    fuseOptions={{ keys: ["title"] }}
                    resultStringKeyName="title"
                    styling={{
                        zIndex: '9',
                    }}
                />
            </div>
        </div>
    );
};

export default AutocompleteSearch;
