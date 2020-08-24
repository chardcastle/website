export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img className="img-responsive" src="/img/profile.png?cache=1" alt="" />
              <div className="intro-text">
                <span className="name">Software Engineer</span>
                <hr className="code-light" />
                  <span className="skills">
                    PHP / Javascript&nbsp;&nbsp;
                    <i className="fa fa-star" />&nbsp;&nbsp;
                    API Developer&nbsp;&nbsp;
                    <i className="fa fa-star" />&nbsp;&nbsp;
                    QA / Automation Tester
                  </span>
              </div>
          </div>
        </div>
      </div>
    </header>
  )
}
