import React from 'react'

const PageHeader = () => {
  return (
    <div> <div className="pageheader bg_img" >
      <div className="container">
        <div className="pageheader__content text-center">
          <h2>Ollya All Members</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              {/* <li className="breadcrumb-item"><a href="#">Community</a></li> */}
              <li className="breadcrumb-item active" aria-current="page">All Members</li>
            </ol>
          </nav>
        </div>
      </div>
    </div></div>
  )
}

export default PageHeader