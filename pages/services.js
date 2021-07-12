import SEOLayout from '../components/shared/SEOLayout';

const services = () => {
    return (
        <>
            <SEOLayout title="About | ziatech" />
            <main className="services">
                <section className="page-hero">
                    <div className="container text-center text-white">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h1>Our Services</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="services-list">
                                    <div className="item card mb-3 p-4"> 1. Providing Primary Idea & Selecting Products  <br />
                                        ১। প্রাথমিক ধারণা দেওয়া ও পণ্য বাছাই করা</div>
                                    <div className="item card mb-3 p-4"> 2. Providing Required Training Course <br />
                                        ২। প্রয়োজনীয় প্রশিক্ষণ কোর্স করানো</div>
                                    <div className="item card mb-3 p-4"> 3. Providing Project Profile or Quotation <br />
                                        ৩। প্রকল্প পরিলেখা বা দর বিবরণ সরবরাহ করা</div>
                                    <div className="item card mb-3 p-4"> 4. Making & Setting machineries/Plants/Production lines <br />
                                        ৪। যন্ত্রপাতি/কারখানা/ উৎপাদন সারি তৈরি ও স্থাপন করা</div>
                                    <div className="item card mb-3 p-4"> 5. Supplying Required Raw Materials <br />
                                        ৫। প্রয়োজনীয় কাঁচামাল সরবরাহ করা</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="services-list">
                                    <div className="item card mb-3 p-4"> 6. Supplying Formulas & Chemists or Technicians/ <br />
                                        সূত্র ও রসায়নবিদ কিংবা প্রকৌশলী সরবরাহ করা</div>
                                    <div className="item card mb-3 p-4"> 7. Assuring Production As Per BSTI & ISO Standard <br />
                                        ৭। বিএসটিআই ও আইএসও মানদণ্ডে পণ্য উৎপাদন নিশ্চিত করা</div>
                                    <div className="item card mb-3 p-4"> 8. Making Cylinder and Printing Label <br />
                                        ৮। সিলিন্ডার তৈরি করা ও মোড়ক ছাপানো</div>
                                    <div className="item card mb-3 p-4"> 9. Helping for all License- (Trade Mark, BSTI, Join Stock etc.) <br />
                                        ৯। সকল লাইসেন্সের জন্য সহযোগিতা করা ( ট্রেড মার্ক, বিএসটিআই, জয়েন স্টক ইত্যাদি )</div>
                                    <div className="item card mb-3 p-4"> 10. Providing Scientific Marketing Plan for selling products / <br />
                                        ১০। পণ্য বিক্রয়ের জন্য বিজ্ঞানসম্মত বাজারজাত পরিকল্পনা সরবরাহ করা।</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default services;