import './CountryDetailsShimmer.css';
export default function CountryDetailsShimmer() {
    return (
        <>
            {/* <button className="back-btn"  ><i className="fa-solid fa-arrow-left-long"></i> Back</button> */}
            <div className="details-container-shimmer"><div className="country-flag-shimmer">
                <img src="" alt="" />
            </div>
                <div className="country-details-shimmer">
                    <h2 className="country-name-shimmer"></h2>
                    <div className="details-columns-shimmer">
                        <div className="details-col1-shimmer">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="details-col2-shimmer">
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>
                    </div>
                    <div className="border-contries-shimmer">
                    </div>
                </div>
            </div>
        </>
    )
}