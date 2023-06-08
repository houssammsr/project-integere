import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Articles.css";

const Articles = () => {
  const navigate = useNavigate();
  const { chapterId } = useParams();
  const [articleData, setArticleData] = useState([]);
  const [chapterName, setChapterName] = useState("");
  const [allocatedAmount, setAllocatedAmount] = useState("");

  useEffect(() => {
    fetch('/api/chapters/${chapterId}/')
      .then((response) => response.json())
      .then((data) => {
        setChapterName(data.chapter_name);
        setAllocatedAmount(data.allocated_amount);
      })
      .catch((error) => {
        console.error("Error fetching chapter data:", error);
      });

    fetch('/api/articles?chapterId=${chapterId}')
      .then((response) => response.json())
      .then((data) => {
        setArticleData(data);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, [chapterId]);

  const onGoBackButtonClick = useCallback(() => {
    navigate("/admin/Funds");
  }, [navigate]);

  return (
    <div className="articles">
      <div className="allocate-container">
        <div className="section-details">
          <div className="section-name-container">
            <div className="section-name-title-articles">chapter name</div>
            <div className="section-name">{chapterName}</div>
          </div>
          <div className="section-amount-details">
            <div className="section-name-title-articles">Allocated Amount</div>
            <div className="section-amount-container">
              <div className="amount-and-dzd-container6">
                <div className="section-name-title-articles">{allocatedAmount}</div>
                <div className="dzd6">DZD</div>
              </div>
            </div>
          </div>
        </div>
        <div className="articles-container">
          <div className="articles-details-titles">
            <div className="allocated-amount">Allocated Amount</div>
            <div className="remaining-allocated-amount">
              Remaining Allocated Amount
            </div>
            <div className="articles1">Articles</div>
          </div>
          <div className="articles-details">
            {articleData.map((article, index) => (
              <div className="article" key={index}>
                <div className="article-name-container2">
                  <div className="icsection2">
                    <img className="vector-icon8" alt="" src="/vector1fun.svg" />
                  </div>
                  <div className="div">{article.name}</div>
                </div>
                {article.amounts.map((amount, i) => (
                  <div className="article-allocated-amount-conta2" key={i}>
                    <div className="ic-amount-grey2">
                      <img className="vector-icon9" alt="" src="/vectorfun.svg" />
                    </div>
                    <div className="amount-and-dzd-container7">
                      <div className="section-name-title-articles">{amount}</div>
                      <div className="section-name-title-articles">DZD</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="go-back-button1" onClick={onGoBackButtonClick}>
        <img className="vector-icon23" alt="" src="/vector3.svg" />
      </button>
    </div>
  );
};

export default Articles;