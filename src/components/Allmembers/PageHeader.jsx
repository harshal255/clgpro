import React from 'react'

const PageHeader = () => {
  return (
    <div> <div class="pageheader bg_img" >
      <div class="container">
        <div class="pageheader__content text-center">
          <h2>Ollya All Members</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Community</a></li>
              <li class="breadcrumb-item active" aria-current="page">All Members</li>
            </ol>
          </nav>
        </div>
      </div>
    </div></div>
  )
}

export default PageHeader