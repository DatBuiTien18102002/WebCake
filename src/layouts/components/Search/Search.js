import { useEffect, useState, useRef } from 'react';

// import * as searchService from '~/services/searchService';

import { useDebounce } from '~/hooks';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import CakeItem from '~/components/CakeItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import productApi from '~/services/productApi';

const cx = classNames.bind(styles);
const sampleData = [
    { id: 1, avatar: images.cake.creamCake, name: 'CreamCake', price: '120.000đ' },
    { id: 2, avatar: images.cake.cupcake, name: 'Cupcake', price: '127.000đ' },
    { id: 3, avatar: images.cake.fritter, name: 'Dorayakicake', price: '220.000đ' },
    { id: 4, avatar: images.cake.pancake, name: 'Pancake', price: '110.000đ' },
];

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [headerInput, setHeaderInput] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounceHI = useDebounce(headerInput, 500);

    const inputSearch = useRef();

    useEffect(() => {
        if (!debounceHI.trim()) {
            setSearchResult([]);
            return;
        }
        // setLoading(true);
        // setTimeout(() => {
        //     setSearchResult(sampleData);
        //     setLoading(false);
        // }, 1000);

        //Used when having a url
        const fetchApi = async () => {
            try {
                setLoading(true);
                const result = await productApi.search(debounceHI);
                setSearchResult(result);
                setLoading(false);
            } catch (error) {
                setLoading(true);
            }
        };

        fetchApi();
    }, [debounceHI]);

    const handleInput = (e) => {
        const searchValue = e.target.value;

        //Kiểm tra kí tự đầu tiên nhập vào có dấu cách không
        if (!searchValue.startsWith(' ')) {
            setHeaderInput(searchValue);
        }
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClear = () => {
        setHeaderInput('');
        inputSearch.current.focus();
    };

    return (
        <div className={cx('search-wrapper')}>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-tittle')}>Cakes</h4>
                            {searchResult.map((result) => (
                                <CakeItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputSearch}
                        value={headerInput}
                        placeholder="Tìm kiếm bánh"
                        spellCheck={false}
                        onChange={handleInput}
                        onFocus={() => setShowResult(true)}
                    />

                    {headerInput && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
