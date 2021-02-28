import 'article.dart';

abstract class IArticles {
  Future<String> postNewArticle(Article article);
  Future<Article> getArticle(String articleId);
  Future<List<Article>> getListArticles();
}
