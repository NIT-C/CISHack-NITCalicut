// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

import 'package:get_it/get_it.dart' as _i1;
import 'package:injectable/injectable.dart' as _i2;

import 'application/article_page/article_page_bloc.dart' as _i5;
import 'application/dashboard/dashboard_bloc.dart' as _i6;
import 'domain/article/i_articles.dart' as _i3;
import 'infrastructure/articles_repository.dart'
    as _i4; // ignore_for_file: unnecessary_lambdas

// ignore_for_file: lines_longer_than_80_chars
/// initializes the registration of provided dependencies inside of [GetIt]
_i1.GetIt $initGetIt(_i1.GetIt get,
    {String environment, _i2.EnvironmentFilter environmentFilter}) {
  final gh = _i2.GetItHelper(get, environment, environmentFilter);
  gh.lazySingleton<_i3.IArticles>(() => _i4.ArticleRepository());
  gh.factory<_i5.ArticlePageBloc>(
      () => _i5.ArticlePageBloc(get<_i3.IArticles>()));
  gh.factory<_i6.DashboardBloc>(() => _i6.DashboardBloc(get<_i3.IArticles>()));
  return get;
}
