import 'package:foxtrot/domain/article/article.dart';
import 'package:foxtrot/domain/article/i_articles.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:injectable/injectable.dart';

@LazySingleton(as: IArticles)
class ArticleRepository implements IArticles {
  @override
  Future<Article> getArticle(String articleId) async {
    CollectionReference articles =
        FirebaseFirestore.instance.collection('articles');

    DocumentSnapshot articleDoc = await articles.doc(articleId).get();

    if (!articleDoc.exists) {
      return null;
    }

    Map<String, dynamic> data = articleDoc.data();

    return Article.fromJson(data);
  }

  @override
  Future<String> postNewArticle(Article article) async {
    CollectionReference articles =
        FirebaseFirestore.instance.collection('articles');

    DocumentReference ref = await articles.add(article.toJson());
    return ref.id;
  }

  @override
  Future<List<Article>> getListArticles() async {
    final articles =
        await FirebaseFirestore.instance.collection('articles').get();
    return articles.docs.map((e) => Article.fromJson(e.data())).toList();
  }
}
