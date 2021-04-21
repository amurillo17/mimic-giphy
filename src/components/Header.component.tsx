import { DebounceInput } from 'react-debounce-input';

function Header({ setSearchText }: HeaderProps) {

    return (
        <div>
            <div>GIPHY</div>
            <DebounceInput
                debounceTimeout={300}
                onChange={event => setSearchText(event.target.value.trim())} />
        </div>
    );
}

type HeaderProps = {
    setSearchText: any
}

export default Header;
