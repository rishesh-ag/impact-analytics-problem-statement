<div class="file-problem complete-problem-statement black-333"><h1><strong>[Problem Statement]</strong></h1>

<p>Develop a pseudo Frontend Application in React which would let the users list and browse top candidates for a Job. You should solve the <strong>Minimum Requirements </strong>section. Attempting questions in the <strong>Plus Point</strong> section will give you additional credits.</p>

<h2><strong>[Minimum Requirement]</strong>&nbsp;</h2>

<p>Use of Web API to fetch Candidate details.</p>

<ul>
	<li style="">
	<p>Utilise Response Parameters:</p>
	</li>
</ul>

<p style="margin-left: 36pt;">[ Image, name, id].</p>

<ul>
	<li style="">
	<p>Implement functionality to list candidates on a web page.</p>
	</li>
</ul>

<p>&nbsp;</p>

<ol>
	<li style="">
	<p>Display Candidates as Cards (Images with Names).&nbsp;</p>
	</li>
	<li style="">
	<p>Implement&nbsp; Search by Candidate name.&nbsp;</p>
	</li>
	<li style="">
	<p>Submit Screenshot, Source code &amp; Instructions.</p>
	</li>
	<li style="">
	<p>Please use core styling (CSS) and not any external library.</p>
	</li>
</ol>

<p>&nbsp;</p>

<ul>
	<li style="">
	<p>A feature to click on a Candidate to open a new page showing the details of the Candidate along with the given image and a Shortlist and a Reject Button. Page URL must be of the format “/:id” where id is the id of the Candidate. Clicking Shortlist/Reject must take appropriate action and take us back to the Home Page.</p>
	</li>
	<li style="">
	<p>Shortlisted and Rejected tabs should be available in the Home Page. Clicking it must list all the Shortlisted and Rejected candidates appropriately in “/shortlisted” &amp; “/rejected” route.</p>
	</li>
</ul>

<h2><strong>[Plus Point]</strong>&nbsp;</h2>

<ul>
	<li style="">
	<p>Deploy your Frontend App on any Static Website Hosting Service. (This deployment link must be active for at least 2 weeks from Submission Date.)</p>
	</li>
	<li style="">
	<p>Provide the Deployment URL along with Source Code in a .txt file</p>
	</li>
</ul>

<h2><strong>[Appendix]</strong></h2>

<p>— Candidate API: <a href="https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json" style="" target="_blank"><u>https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json</u></a></p>

<p>&nbsp;&nbsp;&nbsp; Note: Use this API to Fetch Candidate details.</p>

<p>— Ideal Frontend Stack :</p>

<ul>
	<li style="">
	<p>*React only.</p>
	</li>
</ul>

<h2>&nbsp;</h2>

<h2><strong>[Functional Test case]</strong></h2>

<ol>
	<li style="">
	<p>Searching by candidate name should reflect the appropriate result for valid and invalid scenarios</p>
	</li>
	<li style="">
	<p>Clicking Shortlist/Reject must take appropriate action and take back to the Home Page&nbsp;</p>
	</li>
	<li style="">
	<p>Shortlisted and Rejected tabs should be available in the Home Page. Clicking it must list all the Shortlisted and Rejected candidates appropriately in “/shortlisted” &amp; “/rejected” route.</p>
	</li>
</ol></div>

<h2><strong>[Home Page]</strong>&nbsp;</h2>
<img src="./img/HomePage.png">
<h2>&nbsp;</h2>

<h2><strong>[On Search Results]</strong>&nbsp;</h2>
<img src="./img/OnSearchResults.png">
<h2>&nbsp;</h2>

<h2><strong>[Profile Page]</strong>&nbsp;</h2>
<img src="./img/ProfilePage.png">
<h2>&nbsp;</h2>

<h2><strong>[ShortListed Candidate]</strong>&nbsp;</h2>
After selecting shorlist button, the candidate will appears under Shorlisted Candidates
<h2>&nbsp;</h2>
<img src="./img/ShortlistCandidates.png">
<h2>&nbsp;</h2>

<h2><strong>[Rejected Candidate]</strong>&nbsp;</h2>
After selecting shorlist button, the candidate will appears under Shorlisted Candidates
<h2>&nbsp;</h2>
<img src="./img/rejectedCandidates.png">